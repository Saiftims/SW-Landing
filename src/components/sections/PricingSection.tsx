import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScheduleCallForm } from "@/components/ScheduleCallForm";

const pricingPlans = [
  {
    name: "Basic",
    description: "For small law firms just getting started with AI expert witnesses",
    price: "$499",
    per: "per month",
    features: [
      "10 expert witness reports per month",
      "Crash physics analysis",
      "Basic injury causation assessment",
      "Standard report templates",
      "Email support",
      "PDF & DOCX exports"
    ],
    cta: "Start Basic Plan",
    popular: false
  },
  {
    name: "Professional",
    description: "Most popular for established firms handling personal injury cases",
    price: "$999",
    per: "per month",
    features: [
      "25 expert witness reports per month",
      "Advanced crash physics analysis",
      "Comprehensive injury biomechanics",
      "Custom report templates",
      "Settlement calculator",
      "Priority support",
      "All file formats & integration"
    ],
    cta: "Start Professional Plan",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large firms with high-volume litigation needs",
    price: "Custom",
    per: "contact for pricing",
    features: [
      "Unlimited expert witness reports",
      "All Professional features",
      "Custom AI training on your cases",
      "API access for integration",
      "Dedicated account manager",
      "Custom branding",
      "Expert review for high-stakes cases"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-accent">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-section">Pricing Plans</h2>
          <p className="subheading mx-auto">
            Save thousands on expert witness fees with plans designed for law firms of all sizes.
            All plans include court-admissible reports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <Card key={i} className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className={`pb-8 ${plan.popular ? 'pt-10' : ''}`}>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.per}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {plan.cta === "Contact Sales" ? (
                  <ScheduleCallForm
                    trigger={
                      <Button
                        className="w-full font-semibold py-6"
                        variant={plan.popular ? "gradient" : "outline"}
                        size="lg"
                      >
                        {plan.cta}
                      </Button>
                    }
                  />
                ) : (
                  <Button
                    className="w-full font-semibold py-6"
                    variant={plan.popular ? "gradient" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-background rounded-lg p-8 border">
          <h3 className="text-2xl font-bold mb-4">ROI Calculator</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            A single traditional expert witness report costs $5,000-$10,000 and takes 2-4 weeks.
            With Silent Witness, you get unlimited reports at a fraction of the cost.
          </p>
          <div className="inline-flex items-center bg-secondary/10 rounded-full px-6 py-3 text-secondary-foreground">
            <span className="font-medium">Average savings per case:</span>
            <span className="text-xl font-bold ml-3">$8,500</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
