export const stages = [
  'Compliance as Opportunity',
  'Making Value Chains Sustainable',
  'Designing Sustainable Products and Services',
  'Developing New Business Models',
  'Creating Next-Practice Platforms'
];

// Scores follow the instructor key in the supplied activity pack.
export const questions = [
  {
    stage: 0, title: 'The $500,000 capital decision',
    scenario: 'A new customer standard becomes mandatory in 18 months. You can spend up to $500,000 this year. The CFO is under pressure to protect this year’s margin; the board has a five-year emissions target. Choose one first investment.',
    options: [
      { text: 'Energy-efficiency upgrades: forecast 15% energy reduction and three-year payback, but they do not fully address the new customer standard.', score: 8, feedback: 'Good choice. Energy efficiency offers measurable savings and supports long-term emissions goals. However, it does not fully address the upcoming customer requirement, so additional investment will still be needed.' },
      { text: 'Recycled input: improves product footprint, but supply is inconsistent and unit costs may rise by 8%.', score: 6, feedback: 'A reasonable sustainability-focused investment. Recycled inputs can improve the product footprint, but inconsistent supply and higher costs create risks that need to be managed before committing.' },
      { text: 'Supplier-improvement programme: could reduce waste and emissions across the value chain, but measurable benefits may take four years.', score: 7, feedback: 'A forward-looking choice. Supplier improvements can deliver wider environmental benefits, but the four-year timeline may be too slow for the immediate customer requirement.' },
      { text: 'Monitoring and compliance systems: protect the customer contract and improve reporting, but create little immediate cost saving.', score: 10, feedback: 'Strong choice. You are addressing the immediate compliance risk and protecting the customer relationship. Reliable monitoring also creates a foundation for future sustainability improvements.' }
    ]
  },
  {
    stage: 1, title: 'Procurement’s cheapest offer',
    scenario: 'Procurement finds a supplier offering a 9% lower price. Environmental data are incomplete and delivery reliability is slightly worse. The savings would help this quarter. The incumbent supplier is costlier but has traceable data and an emissions-reduction plan.',
    options: [
      { text: 'Switch now and require environmental data later; savings can fund other sustainability investments.', score: 4, feedback: 'The cost savings are attractive, but switching before checking environmental and delivery performance creates unnecessary risk. Savings should not come at the expense of supply-chain reliability.' },
      { text: 'Reject the cheaper supplier outright because incomplete data make it unacceptable, without further assessment.', score: 6, feedback: 'You are taking environmental accountability seriously. However, rejecting the supplier without further assessment may eliminate a potentially viable alternative.' },
      { text: 'Run a time-limited, low-volume trial with minimum data and delivery thresholds; compare total cost, risk, and footprint before wider award.', score: 10, feedback: 'Strong decision. A controlled trial allows you to evaluate cost, delivery reliability and environmental performance before making a larger commitment.' },
      { text: 'Retain the current supplier automatically; known sustainability performance should outweigh price and delivery considerations.', score: 5, feedback: 'Retaining a supplier with proven sustainability performance reduces uncertainty. However, automatically rejecting alternatives may prevent innovation and cost improvements.' }
    ]
  },
  {
    stage: 2, title: 'Customers like the durable product—but won’t pay more',
    scenario: 'Your redesigned product is easier to repair and lasts longer. Interviews are positive, but most buyers will not pay a premium. Sales compensation rewards new-unit sales, and the current model relies on repeat purchases.',
    options: [
      { text: 'Launch to every customer at the current price and ask sales to adapt; long-term trust should eventually compensate for lower repeat sales.', score: 5, feedback: 'The ambition is positive, but launching broadly without testing demand or changing sales incentives creates commercial and organizational risks.' },
      { text: 'Test the repairable product with a defined segment, measure willingness to pay and service costs, and adjust incentives for repair/service outcomes.', score: 10, feedback: 'Excellent choice. You are testing actual customer demand while addressing the internal incentives that could prevent the new product from succeeding.' },
      { text: 'Keep the existing product and market the repairable design only as a future concept until customers explicitly demand it.', score: 3, feedback: 'This protects the existing business model in the short term, but waiting for customers to demand change may cause the company to miss an emerging market opportunity.' },
      { text: 'Launch a premium durable version for customers who say sustainability matters, without changing sales incentives.', score: 7, feedback: 'A premium launch could work if customers are willing to pay more. However, leaving sales incentives unchanged may discourage the sales team from promoting the new product.' }
    ]
  },
  {
    stage: 3, title: 'Refurbishment competes with new sales',
    scenario: 'Refurbishment could recover valuable components and reduce waste. Sales fears lost new-product revenue; service teams lack capacity and no one owns returned-product quality.',
    options: [
      { text: 'Launch broadly now and resolve ownership questions as demand grows.', score: 3, feedback: 'Moving quickly shows ambition, but launching without clear ownership, capacity or quality controls could create operational problems and undermine customer confidence.' },
      { text: 'Run a small pilot with product eligibility rules, a quality owner, capacity limits, and incentives rewarding total customer value—not only new sales.', score: 10, feedback: 'Strong choice. You are addressing the operational barriers while creating incentives that support refurbishment rather than focusing only on new-product sales.' },
      { text: 'Drop refurbishment until sales teams voluntarily support it; otherwise the organization will resist.', score: 2, feedback: 'Avoiding internal resistance may seem practical, but waiting for voluntary support can prevent innovation. Leadership needs to address the incentive and ownership problems.' },
      { text: 'Outsource all refurbishment and measure success only by the number of units diverted from disposal.', score: 6, feedback: 'Outsourcing can provide useful expertise and capacity. However, measuring only units diverted from disposal does not establish the full environmental benefit or lifecycle impact.' }
    ]
  },
  {
    stage: 4, title: 'Scale, share, or protect the innovation?',
    scenario: 'Your pilot cuts waste and operating costs, but results depend on a supplier process not yet widely available. Other firms ask to join a platform. Sharing could accelerate adoption; leadership worries about losing advantage. Evidence comes from only two sites.',
    options: [
      { text: 'Keep the method confidential until it is rolled out everywhere; sharing now could help competitors.', score: 5, feedback: 'Protecting competitive advantage is reasonable, but keeping the innovation entirely confidential may limit opportunities for wider industry adoption and collaboration.' },
      { text: 'Publish the full method and invite all firms to adopt it immediately; diffusion should take priority over commercial concerns.', score: 6, feedback: 'Sharing knowledge can accelerate sustainability improvements, but publishing everything before validating results may expose valuable know-how and spread an approach that is not yet proven.' },
      { text: 'Expand to more sites, validate results, and define which standards/data can be shared safely while protecting genuinely differentiating know-how.', score: 10, feedback: 'Excellent choice. You are validating results before scaling while identifying what can be shared safely. This balances industry-wide impact with commercial interests.' },
      { text: 'Announce an industry platform now, then work out measurement standards, governance, and partner contributions later.', score: 3, feedback: 'Creating an industry platform is ambitious, but announcing it before establishing governance, measurement standards and partner responsibilities can undermine its credibility.' }
    ]
  }
];

export const scoreBands = [
  { min: 90, title: 'Strong managerial judgment', description: 'You balance sustainability, evidence, business viability, and execution.' },
  { min: 75, title: 'Effective judgment', description: 'Your choices are generally sound, with some underweighted risks or missed learning opportunities.' },
  { min: 60, title: 'Developing judgment', description: 'You recognize trade-offs but may over-rely on short-term metrics, assumptions, or symbolic commitments.' },
  { min: 0, title: 'Room to strengthen decision-making', description: 'Consider how evidence, implementation, stakeholder incentives, and system-wide impacts shape sustainability decisions.' }
];
