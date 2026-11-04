export const stages = [
  'Compliance as Opportunity',
  'Making Value Chains Sustainable',
  'Designing Sustainable Products and Services',
  'Developing New Business Models',
  'Creating Next-Practice Platforms'
];

// Scores follow the instructor's answer key in the supplied activity pack.
export const questions = [
  {
    stage: 0,
    title: 'The $500,000 Capital Decision',
    scenario: 'A new customer standard will become mandatory in 18 months. You can invest up to $500,000 this year. The CFO is under pressure to protect this year’s profit margin, while the board has committed to a five-year emissions target. Choose your first investment.',
    options: [
      {
        text: 'Energy-efficiency upgrades: Expected to reduce energy consumption by 15%, with a three-year payback period, but they do not fully address the new customer standard.',
        score: 8,
        feedback: 'A good choice. Energy-efficiency improvements offer measurable cost savings and support long-term emissions targets. However, they do not fully address the upcoming customer requirement, so additional investment will still be necessary.'
      },
      {
        text: 'Recycled inputs: Improve the product’s environmental footprint, but supply is inconsistent and unit costs could increase by 8%.',
        score: 6,
        feedback: 'A reasonable sustainability-focused investment. Recycled inputs can improve the product’s environmental footprint, but inconsistent supply and potentially higher costs introduce risks that must be managed before making a commitment.'
      },
      {
        text: 'Supplier-improvement programme: Could reduce waste and emissions across the value chain, but measurable benefits may take up to four years to materialize.',
        score: 7,
        feedback: 'A forward-looking choice. Supplier improvements can deliver broader environmental benefits across the value chain. However, the four-year timeline may be too long to address the immediate customer requirement.'
      },
      {
        text: 'Monitoring and compliance systems: Help meet the customer requirement and improve reporting, but offer little in the way of immediate cost savings.',
        score: 10,
        feedback: 'A strong choice. You are addressing the immediate compliance risk and protecting the customer relationship. Reliable monitoring systems also establish a foundation for future sustainability improvements.'
      }
    ]
  },
  {
    stage: 1,
    title: 'Procurement’s Cheapest Offer',
    scenario: 'Procurement identifies a supplier offering a 9% lower price. However, its environmental data are incomplete, and its delivery reliability is slightly lower. The savings would improve this quarter’s financial results. The incumbent supplier is more expensive but provides traceable environmental data and has an established emissions-reduction plan.',
    options: [
      {
        text: 'Switch immediately and request environmental data later; the savings could fund other sustainability initiatives.',
        score: 4,
        feedback: 'The potential cost savings are attractive, but switching suppliers before evaluating their environmental and delivery performance introduces unnecessary risks. Cost savings should not come at the expense of supply-chain reliability.'
      },
      {
        text: 'Reject the cheaper supplier outright because its incomplete environmental data make it unacceptable, without conducting any further assessment.',
        score: 6,
        feedback: 'You are taking environmental accountability seriously. However, rejecting the supplier without further assessment could eliminate a potentially viable alternative.'
      },
      {
        text: 'Conduct a time-limited, low-volume trial with minimum environmental data and delivery thresholds. Compare total cost, risk, and environmental footprint before making a broader sourcing decision.',
        score: 10,
        feedback: 'A strong decision. A controlled trial allows you to evaluate cost, delivery reliability, and environmental performance before making a larger commitment.'
      },
      {
        text: 'Automatically retain the current supplier; its established sustainability performance should outweigh considerations of price and delivery.',
        score: 5,
        feedback: 'Retaining a supplier with proven sustainability performance reduces uncertainty. However, automatically dismissing alternatives could prevent innovation and opportunities for cost improvement.'
      }
    ]
  },
  {
    stage: 2,
    title: 'Customers Like the Durable Product—but Won’t Pay More',
    scenario: 'Your redesigned product is easier to repair and lasts longer. Customer interviews have been positive, but most buyers are unwilling to pay a premium. Sales compensation rewards new-unit sales, while the current business model relies on repeat purchases.',
    options: [
      {
        text: 'Launch the product to all customers at the current price and ask the sales team to adapt; long-term customer trust should eventually compensate for reduced repeat sales.',
        score: 5,
        feedback: 'The ambition is positive, but launching broadly without testing demand or adjusting sales incentives creates commercial and organizational risks.'
      },
      {
        text: 'Test the repairable product with a defined customer segment, measure willingness to pay and service costs, and adjust incentives to reward repair and service outcomes.',
        score: 10,
        feedback: 'An excellent choice. You are testing actual customer demand while addressing internal incentives that could otherwise prevent the new product from succeeding.'
      },
      {
        text: 'Retain the existing product and promote the repairable design only as a future concept until customers explicitly demand it.',
        score: 3,
        feedback: 'This protects the existing business model in the short term, but waiting for customers to demand change could cause the company to miss an emerging market opportunity.'
      },
      {
        text: 'Launch a premium, durable version for customers who express an interest in sustainability, without changing existing sales incentives.',
        score: 7,
        feedback: 'A premium launch could succeed if customers are willing to pay more. However, leaving sales incentives unchanged may discourage the sales team from actively promoting the new product.'
      }
    ]
  },
  {
    stage: 3,
    title: 'Refurbishment Competes with New Sales',
    scenario: 'Refurbishment could recover valuable components and reduce waste. However, the sales team fears losing revenue from new-product sales, service teams lack the necessary capacity, and no one is responsible for ensuring the quality of returned products.',
    options: [
      {
        text: 'Launch the refurbishment programme across the business immediately and resolve ownership and operational issues as demand grows.',
        score: 3,
        feedback: 'Moving quickly demonstrates ambition, but launching without clear ownership, sufficient capacity, or quality controls could create operational problems and undermine customer confidence.'
      },
      {
        text: 'Run a small pilot with clear product eligibility criteria, an assigned quality owner, defined capacity limits, and incentives that reward total customer value rather than new-product sales alone.',
        score: 10,
        feedback: 'A strong choice. You are addressing the operational barriers while introducing incentives that support refurbishment rather than focusing exclusively on new-product sales.'
      },
      {
        text: 'Put refurbishment on hold until the sales teams voluntarily support the initiative; otherwise, the organization is likely to resist it.',
        score: 2,
        feedback: 'Avoiding internal resistance may seem practical, but waiting for voluntary support could prevent innovation. Leadership needs to address the underlying incentive and ownership challenges.'
      },
      {
        text: 'Outsource all refurbishment activities and measure success solely by the number of units diverted from disposal.',
        score: 6,
        feedback: 'Outsourcing can provide valuable expertise and additional capacity. However, measuring success solely by the number of units diverted from disposal does not capture the full environmental benefits or lifecycle impact.'
      }
    ]
  },
  {
    stage: 4,
    title: 'Scale, Share, or Protect the Innovation?',
    scenario: 'Your pilot has reduced waste and operating costs, but its success depends on a supplier process that is not yet widely available. Other companies have expressed interest in joining a shared platform. Sharing the innovation could accelerate adoption, but leadership is concerned about losing its competitive advantage. Current evidence is based on results from only two sites.',
    options: [
      {
        text: 'Keep the methodology confidential until it has been implemented across all sites; sharing it now could give competitors an advantage.',
        score: 5,
        feedback: 'Protecting competitive advantage is reasonable, but keeping the innovation entirely confidential may limit opportunities for wider industry adoption and collaboration.'
      },
      {
        text: 'Publish the complete methodology and invite all companies to adopt it immediately; accelerating industry-wide adoption should take priority over commercial concerns.',
        score: 6,
        feedback: 'Sharing knowledge can accelerate sustainability improvements. However, publishing everything before validating the results could expose valuable know-how and encourage the adoption of an approach that has not yet been sufficiently proven.'
      },
      {
        text: 'Expand the pilot to additional sites and validate the results. Establish which standards and data can be shared safely while protecting genuinely differentiating know-how.',
        score: 10,
        feedback: 'An excellent choice. You are validating results before scaling the initiative while identifying what can be shared safely. This approach balances broader industry impact with legitimate commercial interests.'
      },
      {
        text: 'Announce an industry-wide platform immediately and establish measurement standards, governance arrangements, and partner contributions at a later stage.',
        score: 3,
        feedback: 'Creating an industry platform is ambitious, but announcing it before establishing governance, measurement standards, and partner responsibilities could undermine its credibility.'
      }
    ]
  }
];

export const scoreBands = [
  {
    min: 90,
    title: 'Strong Managerial Judgment',
    description: 'You successfully balance sustainability objectives, evidence-based decision-making, business viability, and effective execution.'
  },
  {
    min: 75,
    title: 'Effective Judgment',
    description: 'Your decisions are generally sound, although some risks may be underweighted and certain learning opportunities may be overlooked.'
  },
  {
    min: 60,
    title: 'Developing Judgment',
    description: 'You recognize important trade-offs but may rely too heavily on short-term metrics, assumptions, or symbolic commitments.'
  },
  {
    min: 0,
    title: 'Room to Strengthen Decision-Making',
    description: 'Consider how evidence, implementation capabilities, stakeholder incentives, and system-wide impacts influence sustainability decisions.'
  }
];
