'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

const ReactModal = require('react-modal');

const ResumePropTypes = require('../../prop_types/resume');

const ListensModal = React.createClass({
    propTypes: {
        entry: ResumePropTypes.publications,
        isOpen: PropTypes.bool.isRequired,
        onRequestClose: PropTypes.func.isRequired
    },

    render: function () {
        const style = {
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)'
            }
        };
        return (
            <ReactModal className='popup-modal mfp-hide' isOpen={this.props.isOpen} onRequestClose={this.props.onRequestClose} style={style}>
                <img
                    className='scale-with-grid'
                    src={this.props.entry.image.modal}
                    alt={this.props.entry.artist}/>
                <div className='description-box'>
                    <h5>{this.props.entry.artist}</h5>
                    <p>{this.props.entry.album}</p>
                    <p><b>Favorite Tracks</b>: {this.props.entry.favoriteTracks.join(', ')}</p>
                    <p><b>Thoughts</b>: {this.props.entry.thoughts}</p>
                    <span className='categories'>
                        <i className='fa fa-tag'/>
                        {this.props.entry.genres.join(', ')}
                    </span>
                </div>
                <div className='link-box'>
                    <a
                        href={this.props.entry.listen}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Listen
                    </a>
                    <a className='popup-modal-dismiss' onClick={this.props.onRequestClose}>Close</a>
                </div>
            </ReactModal>
        );
    }
});

module.exports = ListensModal;
