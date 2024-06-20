import pc3 from '../assets/img/testimonials.jpg'
import Accordion from './Accordion'

const Testimonials = () => {
  return (
    <div className='font-jost  p-4'>
      <div className='flex flex-col lg:flex-row  gap-6  items-center lg:items-start'>
      
        <div className='bg-blue-100 border-4 border-green-600 p-4   lg:mt-[5rem] rounded-lg w-full lg:w-[55rem] lg:ml-[22rem]'>
          <h1 className='text-green-600 font-bold mb-4 text-xl lg:text-4xl'>
            Try to catch below tips will be importantly to you <span className='a text-2xl lg:text-3xl'>👍🏼</span>
          </h1>
          <Accordion 
            title="✔ What is procurement, and what are its benefits and drawbacks?" 
            answer="Procurement is the process of acquiring goods, services, or works from external sources. Benefits include cost savings through competitive bidding, improved quality of goods and services, and better supplier relationships. Drawbacks can include the complexity of managing supplier contracts, potential delays, and compliance challenges."
          />
          <Accordion 
            title="✔ How does e-procurement differ from traditional procurement?" 
            answer="E-procurement leverages digital technologies to automate and streamline the procurement process, reducing paperwork, speeding up transactions, and improving transparency. Traditional procurement often involves manual processes, which can be slower and more prone to errors."
          />
          <Accordion 
            title="✔ What impact does procurement have on supply chain management?" 
            answer="Effective procurement is crucial for a resilient supply chain, ensuring that materials and services are sourced efficiently and cost-effectively, minimizing disruptions, and maintaining the flow of goods and services."
          />
          <Accordion 
            title="✔ What role does procurement play in cost management?" 
            answer="Procurement helps manage costs by negotiating favorable terms with suppliers, leveraging bulk purchasing, and conducting spend analysis to identify savings opportunities and reduce waste."
          />
          <Accordion 
            title="✔ How does procurement contribute to sustainability initiatives?" 
            answer="Procurement can support sustainability by prioritizing suppliers with environmentally friendly practices, sourcing sustainable materials, and enforcing standards that reduce the environmental impact of the supply chain."
          />
          <Accordion 
            title="✔ What is the cost structure of implementing and maintaining the procurement system?" 
            answer="Costs can include initial setup fees, subscription or licensing fees, training, and ongoing maintenance or support fees. It’s important to clarify any additional costs for customization, integration, and future upgrades."
          />
          <Accordion 
            title="✔ How does the system handle supplier management and relationships?" 
            answer="The system should offer tools for onboarding new suppliers, maintaining a supplier database, performance monitoring, and communication channels. Features like automated RFQs (Request for Quotes), supplier scorecards, and dispute resolution mechanisms are beneficial."
          />
          <Accordion 
            title="✔ Is the procurement system user-friendly and customizable?" 
            answer="User-friendly systems typically have intuitive interfaces, easy navigation, and comprehensive user guides. Customizability allows organizations to tailor workflows, dashboards, and reports to meet specific needs, enhancing user adoption and satisfaction."
          />
          <Accordion 
            title="✔ What are the security measures in place to protect sensitive procurement data?" 
            answer="Security measures can include data encryption, user access controls, audit logs, regular security updates, and compliance with standards like GDPR or ISO 27001. Multi-factor authentication (MFA) and secure data storage practices are also common."
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
