import React from "react";
import {Container,Accordion,Card,Button,Col,Row} from "react-bootstrap";
import "./index.css"


function ArticleAccordian(props){
  return (


<Container>
  <Row>
    <Col><h1 id="articles">Articles</h1>
    <Accordion className="Accordion fluid">
  <Card className="Card fluid">
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Job Reviews
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
<ul>
  <li><a href="https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=Coding&sc.keyword=Coding&locT=C&locId=1150505&jobType=">Glassdoor Coding Job Reviews</a></li>
  <li><a href="https://www.indeed.com/cmp?q=Software+Developer&l=&from=discovery-cmp-search">Software Developer Job Reviews</a></li>
  <li><a href="https://www.linkedin.com/search/results/all/?authorCompany=%5B%5D&authorIndustry=%5B%5D&contactInterest=%5B%5D&facetCity=%5B%5D&facetCompany=%5B%5D&facetConnectionOf=%5B%5D&facetCurrentCompany=%5B%5D&facetCurrentFunction=%5B%5D&facetGeoRegion=%5B%5D&facetGroup=%5B%5D&facetGuides=%5B%5D&facetIndustry=%5B%5D&facetNetwork=%5B%5D&facetNonprofitInterest=%5B%5D&facetPastCompany=%5B%5D&facetProfessionalEvent=%5B%5D&facetProfileLanguage=%5B%5D&facetRegion=%5B%5D&facetSchool=%5B%5D&facetSeniority=%5B%5D&facetServiceCategory=%5B%5D&facetState=%5B%5D&groups=%5B%5D&keywords=Software%20Developer&origin=GLOBAL_SEARCH_HEADER&page=1&refresh=false&skillExplicit=%5B%5D&topic=%5B%5D">Software Developer Reviews on LinkedIn</a></li>
</ul>  
</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
       Tips for Bootcamp Grads
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
<ul>
  <li><a href="https://medium.com/@adriennedomingus/technical-interview-tips-for-bootcamp-grads-55f5274295ac">Technical Interview Tips For Bootcamp Grads</a></li>
  <li><a href="https://techcrunch.com/2015/11/21/having-success-with-code-bootcamps-a-guide-for-employers-and-bootcamp-grads/">Having Success With Code Bootcamps: A Guide For Employers And Bootcamp Grads</a></li>
  <li><a href="https://sylviafronczak.com/2019/02/25/github-tips-for-bootcamp-grads/">GitHub Tips For Bootcamp Grads</a></li>
</ul> 
</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
       Continuing Education
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
<ul>
  <li><a href="https://www.udemy.com/">Udemy</a></li>
  <li><a href="https://www.codecademy.com/">Codecadamy</a></li>
  <li><a href="https://www.coursera.org/?utm_source=gg&utm_medium=sem&utm_content=01-BrandedSearch-US&campaignid=380484307&adgroupid=37885224444&device=c&keyword=coursera%20courses&matchtype=b&network=g&devicemodel=&adpostion=1t1&creativeid=322364986211&hide_mobile_promo&gclid=Cj0KCQiA2ITuBRDkARIsAMK9Q7Prmwe5oDnxm2_cT8S1J0Rv3O5bvsr34nx4zkp2mRxVTPr5QtWNPrwaAmdhEALw_wcB">Coursera</a></li>
</ul> 
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className="Card fluid">
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        New in Software Development
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <ul>
  <li><a href="https://no-kill-switch.ghost.io/inventions-vs-discoveries-in-software-development/">Inventions VS discoveries (in software development)</a></li>
  <li><a href="https://medium.com/nulogy/the-first-pomodoro-habit-for-continuous-learning-e3cfa2e2451d">The First Pomodoro Habit for Continuous Learning</a></li>
  <li><a href="https://www.deekit.com/the-top-developer-communities-which-are-you-not-visiting/">THE TOP DEVELOPER COMMUNITIES – WHICH ARE YOU NOT VISITING?</a></li>
</ul> 
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion></Col>
    <Col><img className="SmallImg fluid" src ="https://i.imgur.com/AMJfimR.jpg"></img>
</Col>
  </Row>
</Container>

  )
}

export default ArticleAccordian;