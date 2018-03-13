'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const Random = require('../../utils/random');
const ListensModal = require('./listensModal');

const Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.projects
    },

    getInitialState: function () {
        return {
            modalOpen: false
        };
    },

    handleOpenModal: function () {
        return this.setState({
            modalOpen: true
        });
    },

    handleCloseModal: function () {
        return this.setState({
            modalOpen: false
        });
    },

    render: function () {
        return (
            <div className='columns goodlistens-item'>
                <div className='item-wrap' onClick={this.handleOpenModal}>
                    <img
                        src={this.props.entry.image.thumb}
                        alt={this.props.entry.artist}/>
                    <div className='overlay'>
                        <div className='goodlistens-item-meta'>
                            <h5>{this.props.entry.artist}</h5>
                            <p>{this.props.entry.album}</p>
                        </div>
                    </div>
                    <div className='link-icon'>
                        <i className='icon-down-open'/>
                    </div>
                </div>
                <ListensModal entry={this.props.entry} isOpen={this.state.modalOpen} onRequestClose={this.handleCloseModal}/>
            </div>
        );
    }
});

const GoodListens = React.createClass({
    propTypes: {
        content: ResumePropTypes.projectsSet
    },

    render: function () {
        const listens = Random.shuffleArray(this.props.content).slice(0, 20);
        return (
            <section id='goodlistens'>
                <div className='row'>
                    <div className='twelve columns collapsed'>
                        <h1><img width="75" src="http://i0.kym-cdn.com/photos/images/original/000/993/254/70f.gif" />Good Listens <img width="75" src="http://bestanimations.com/Cartoons/Simpsons/the-simpsons-animated-gif-2.gif" /></h1>
                        <div id='goodlistens-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
                            {listens.map(function (entry, index) {
                                return (
                                    <Entry key={index} index={index} entry={entry}/>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = GoodListens;
