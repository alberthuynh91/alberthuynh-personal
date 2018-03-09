'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const About = require('./about');
const Work = require('./work');
const Education = require('./education');
const Skills = require('./skills');
const Portfolio = require('./portfolio');
const References = require('./references');
const GoodListens = require('./goodlistens');
const Footer = require('./footer');

const Section = React.createClass({
    propTypes: {
        basics: ResumePropTypes.basics,
        work: ResumePropTypes.workSet,
        education: ResumePropTypes.educationSet,
        skills: ResumePropTypes.skillsSet,
        languages: ResumePropTypes.languagesSet,
        portfolio: ResumePropTypes.publicationsSet,
        references: ResumePropTypes.referencesSet
    },

    render: function () {
        const skillsContent = {
            skills: this.props.skills,
            languages: this.props.languages
        };

        return (
            <div>
                <About content={this.props.basics}/>
                <Work content={this.props.work}/>
                <Education content={this.props.education}/>
                <Skills content={skillsContent}/>
                <Portfolio content={this.props.portfolio}/>
                <References content={this.props.references}/>
                <GoodListens content={this.props.goodlistens}/>
                <Footer content={this.props.basics}/>
            </div>
        );
    }
});

module.exports = Section;
