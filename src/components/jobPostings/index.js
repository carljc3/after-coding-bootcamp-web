import React, { Component } from "react";
import API from "../utils/API";
import FavoriteButton from '../FavoriteButton'
import "./style.css";

class JobPostings extends Component {
  state = {
    JobPostings: [{
      "id": "31701",
      "title": "Full-Stack Developer",
      "description": "<p><p dir=\"ltr\" style=\"line-height: 1.38; background-color: #ffffff; margin-top: 0pt; margin-bottom: 0pt; padding: 0pt 0pt 11pt 0pt;\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: bold; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Company Overview</span></p>\n<p dir=\"ltr\" style=\"line-height: 1.38; background-color: #ffffff; margin-top: 0pt; margin-bottom: 0pt; padding: 0pt 0pt 11pt 0pt;\"><a style=\"text-decoration: none;\" href=\"http://brandyourself.com/\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #1155cc; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: underline; -webkit-text-decoration-skip: none; text-decoration-skip-ink: none; vertical-align: baseline; white-space: pre-wrap;\">BrandYourself&rsquo;s</span></a><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\"> software and services have helped nearly a million people protect and improve their online reputation and privacy. We have been featured on ABC&rsquo;s Shark Tank, BBC&rsquo;s Dragons&rsquo; Den and numerous other media outlets.</span></p>\n<p dir=\"ltr\" style=\"line-height: 1.38; background-color: #ffffff; margin-top: 0pt; margin-bottom: 0pt; padding: 0pt 0pt 11pt 0pt;\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Whether it&rsquo;s what potential employers find when they Google your name or look you up on social media, or having your personal information and data exposed to hackers, spammers and telemarketers; the information that&rsquo;s available about you online can now impact multiple areas of your life.</span></p>\n<p dir=\"ltr\" style=\"line-height: 1.38; background-color: #ffffff; margin-top: 0pt; margin-bottom: 0pt; padding: 0pt 0pt 11pt 0pt;\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">BrandYourself&rsquo;s industry-first software and services help individuals take back control of their online reputation and privacy.</span></p>\n<p dir=\"ltr\" style=\"line-height: 1.38; background-color: #ffffff; margin-top: 0pt; margin-bottom: 0pt; padding: 0pt 0pt 11pt 0pt;\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">BrandYourself is headquartered in New York City with a second, rapidly-growing office in Lancaster, PA. To learn more about the company visit: http://brandyourself.com/about</span></p>\n<p dir=\"ltr\" style=\"line-height: 1.38; background-color: #ffffff; margin-top: 0pt; margin-bottom: 0pt; padding: 0pt 0pt 11pt 0pt;\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: bold; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Job Description</span></p>\n<p dir=\"ltr\" style=\"line-height: 1.38; background-color: #ffffff; margin-top: 0pt; margin-bottom: 0pt; padding: 0pt 0pt 11pt 0pt;\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">We&rsquo;re looking for a Full-Stack Developer to join our dynamic Engineering team. This role will focus on helping us execute our web application and API roadmap. This position can be located in our NYC headquarters, Lancaster office or telecommute.</span></p>\n<p dir=\"ltr\" style=\"line-height: 1.38; background-color: #ffffff; margin-top: 0pt; margin-bottom: 0pt; padding: 0pt 0pt 11pt 0pt;\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">This is an opportunity to join a fast-growing, venture-backed company in a rapidly expanding market in a highly-impactful position.</span></p>\n<p dir=\"ltr\" style=\"line-height: 1.38; background-color: #ffffff; margin-top: 0pt; margin-bottom: 11pt;\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: bold; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Job Responsibilities</span></p>\n<ul style=\"margin-top: 0; margin-bottom: 0;\">\n<li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\">\n<p dir=\"ltr\" style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Own your work from technical design, development, testing, deploying, maintaining and documenting</span></p>\n</li>\n<li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\">\n<p dir=\"ltr\" style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 8pt;\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Collaborate with the Product team and other members of the Engineering team to solve business &amp; technical challenges in simple, sustainable ways</span></p>\n</li>\n</ul>\n<p dir=\"ltr\" style=\"line-height: 1.38; background-color: #ffffff; margin-top: 0pt; margin-bottom: 11pt;\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: bold; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Qualifications</span></p>\n<p>&nbsp;</p>\n<ul style=\"margin-top: 0; margin-bottom: 0;\">\n<li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\">\n<p dir=\"ltr\" style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">5+ years experience in a full-stack developer role for a SaaS company in an Agile Scrum environment, preferably at a start-up</span></p>\n</li>\n<li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\">\n<p dir=\"ltr\" style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 8pt;\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Familiarity with several components of the following technology stack: React/Redux, RabbitMQ, PHP, Redis, JSON API, NodeJS, Python, Nginx, Supervisord, MySQL NDB Cluster, CouchDB</span></p>\n</li>\n<li dir=\"ltr\" style=\"list-style-type: disc; font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;\">\n<p dir=\"ltr\" style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 8pt;\"><span style=\"font-size: 12pt; font-family: 'Roboto Condensed',sans-serif; color: #2b333a; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">Ability to work collaboratively within a distributed Engineering team</span></p>\n</li>\n</ul></p>",
      "perks": null,
      "howto_apply": "",
      "post_date": "2019-10-31 12:43:36",
      "relocation_assistance": 0,
      "telecommuting": 1,
      "category": {
          "id": "4",
          "name": "Front-end Engineering"
      },
      "type": {
          "id": "1",
          "name": "Full-time"
      },
      "company": {
          "id": "brandyourself",
          "name": "BrandYourself",
          "url": "http://www.brandyourself.com",
          "type": null,
          "logo": "https://d2fcz5no062gar.cloudfront.net/logos/brandyourself_1350583632.png"
      },
      "keywords": "your,company,team,fullstack,online,engineering,developer,technical,media,other,office,lancaster,about,reputation,their,information,join,have,services,software,role,work,responsibilitiesown,maintaining,deploying,documentingcollaborate,testing,development,d",
      "apply_url": "http://careers.brandyourself.com/apply/esmMD51Tqw/Full-Stack-Developer",
      "url": "https://authenticjobs.com/jobs/31701/full-stack-developer"
  },
  {
      "id": "31689",
      "title": "Experienced Web Developer - Join a small talented team",
      "description": "<p><p><span style=\"color: #151b26; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;\"><span style=\"font-size: 13px; white-space: pre-wrap;\"><strong>Confluent Design is seeking an experienced web developer</strong> for regular contract work on a Processwire (PHP) based website, several Rails apps, and potential api and js integrations with other platforms. Solid experience with Git, Rails, JavaScript, and PHP is required. The job will include reviewing and updating existing web sites and applications, as well as collaborating on strategy and roadmaps for future development. </span></span></p>\n<p><span style=\"color: #151b26; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;\"><span style=\"font-size: 13px; white-space: pre-wrap;\">You will be working closely with our talented team lead (an experienced front end designer and HTML/CSS author) to implement new features and entirely new applications in a highly collaborative environment. We expect the usual task load to require approximately 20 hours per week. </span></span></p>\n<p><span style=\"color: #151b26; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;\"><span style=\"font-size: 13px; white-space: pre-wrap;\"><strong>Bonus points for experience with:</strong> Processwire, Marketo, FormAssembly, SalesForce, SquareSpace, Luminate Online, and Asana. </span></span></p>\n<p><span style=\"color: #151b26; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;\"><span style=\"font-size: 13px; white-space: pre-wrap;\"><strong>About Confluent Design</strong> We are a small group of creative professionals who are passionate about creating engaging, accessible, high performance websites and web applications for good causes that help people. Currently, we primarily serve a nonprofit supporting veterans and their families. We would like to find someone to grow with us and lead our web programming efforts.</span></span></p></p>",
      "perks": null,
      "howto_apply": "Please send resumes to jared@confluentdesign.com",
      "post_date": "2019-10-25 14:32:14",
      "relocation_assistance": 0,
      "telecommuting": 1,
      "category": {
          "id": "2",
          "name": "Back-end Engineering"
      },
      "type": {
          "id": "5",
          "name": "Part-time"
      },
      "company": {
          "id": "confluentdesignllc",
          "name": "Confluent Design LLC",
          "url": "http://confluentdesign.com",
          "type": null,
          "logo": "https://d2fcz5no062gar.cloudfront.net/assets/images/defaults/company-blank.png",
          "tagline": "Helping nonprofits excel on the web"
      },
      "keywords": "experienced,applications,rails,lead,about,small,experience,php,processwire,developer,will,design,confluent,team,talented,passionate,creating,professionals,creative,group,asana,hours,online,luminate,squarespace,engaging,formassembly,marketo,points,bonus",
      "apply_url": "http://mailto:jared@confluentdesign.com",
      "url": "https://authenticjobs.com/jobs/31689/experienced-web-developer-join-a-small-talented-team"
  }],
    black: true
  };

  componentDidMount() {
    this.loadJobPostings();
  }

  loadJobPostings = () => {
    API.getJobPostings()
      .then(res =>{
        console.log('getJobPostings res', res.data)
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
  };
  favoriteThingHandler = (data,type)=>{
    if(type==='job'){
      //save to jobs array
      this.setState({black: !this.state.black})
    } else if(type==="video"){
      //save to video array
    }
    else if(type==="articles"){
    //save to articles array
    }
    console.log(data,type)
  }
//   changeColor(){
//     this.setState({black: !this.state.black})
//  }
  render() {
    let btn_class = this.state.black ? "blackButton" : "whiteButton";
    return (
     <div>
         {
             this.state.JobPostings.map(posting =>{
                 return (
                <div className= "container">
                    <h3>Title: {posting.title}</h3>
                    <h1>How to Apply: {posting.apply_url} </h1>
                 <FavoriteButton btn_class={btn_class} data={posting} whereToSave="job" clickHandler={this.favoriteThingHandler}/>
                </div>)
             })
         }
     </div>
    );
  }
}

export default JobPostings;

// <i class="fa fa-star fa-2x"></i> <---filled

// <i class="fa fa-star-o fa-2x"></i> <---unfilled
