import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Cog, Zap, Shield, Thermometer, Wrench, CheckCircle, Factory, Settings, FlaskConical, Gauge } from 'lucide-react';
const ProcessSection = () => {
  const manufacturingSteps = [{
    step: "01",
    title: "Core Preparation",
    icon: Cog,
    description: "CRGO steel laminations from global suppliers (USA, Japan, Europe) assembled with precision",
    details: ["Prime Cold Rolled Grain Oriented Steel", "Grades: American M-2 to M-6, Japanese HI-B", "Shot blasting & zinc spray treatment", "Pressure & vacuum tank testing"],
    image: "/lovable-uploads/5cf64ce8-2122-4b1e-80cc-e5d50097d4bc.png"
  }, {
    step: "02",
    title: "Winding Design",
    icon: Settings,
    description: "Advanced winding techniques ensuring electrical, thermal, and mechanical requirements",
    details: ["Spiral/Helical coil construction", "Cross-over coil technology", "Continuous disc coil design", "Copper/aluminum conductor options"],
    image: "/lovable-uploads/d8690b9e-2906-47c5-a07b-77cd8c52c48f.png"
  }, {
    step: "03",
    title: "Assembly & Testing",
    icon: Wrench,
    description: "Core-coil assembly with rigorous testing protocols following international standards",
    details: ["Vacuum drying process", "High-grade transformer oil filling", "Comprehensive electrical testing", "Mechanical stress validation"],
    image: "/lovable-uploads/75fc316f-019f-422e-9800-a37d70fe9c54.png"
  }, {
    step: "04",
    title: "Quality Control",
    icon: Shield,
    description: "Stringent quality checks and CPRI testing ensuring world-class performance",
    details: ["IEC-60076 / IS-2026 compliance", "Di-electric testing", "Temperature rise validation", "CPRI dynamic/thermal testing"],
    image: "/lovable-uploads/6cea62cc-ab77-4d59-8c5a-bcc7938a31ba.png"
  }];
  const testingProcedures = [{
    category: "Electrical Tests",
    icon: Zap,
    tests: ["Winding resistance measurement", "Voltage ratio verification", "Phase displacement check", "Short-circuit impedance test", "No-load loss measurement", "Insulation resistance test"]
  }, {
    category: "Di-Electric Tests",
    icon: FlaskConical,
    tests: ["Power frequency test (primary/secondary)", "Induced over voltage test", "Breakdown value measurement", "Oil resistivity & tan-delta test", "Insulation resistance validation", "Lightning impulse test"]
  }, {
    category: "Thermal Tests",
    icon: Thermometer,
    tests: ["Temperature rise test", "Hot spot temperature check", "Cooling system validation", "Thermal imaging analysis", "Oil circulation verification", "Load capacity confirmation"]
  }, {
    category: "Mechanical Tests",
    icon: Gauge,
    tests: ["Tank pressure test", "Vacuum leak test", "Paint coating measurement", "Vibration analysis", "Short circuit withstand", "Noise level measurement"]
  }];
  const qualityStandards = [{
    standard: "IEC-60076",
    description: "International standard for power transformers"
  }, {
    standard: "IS-2026",
    description: "Indian standard for transformers"
  }, {
    standard: "ANSI/IEEE",
    description: "American National Standards"
  }, {
    standard: "BS Standards",
    description: "British Standards compliance"
  }];
  const coreMaterials = [{
    supplier: "A.K. Steel (USA)",
    grades: ["M-2", "M-3", "M-4", "M-5", "M-6", "H-0 DR", "H-1 DR"],
    description: "Premium American CRGO steel"
  }, {
    supplier: "Nippon Steel & JFE (Japan)",
    grades: ["M-3", "M-4", "M-5", "M-6", "HI-B", "ZH", "MOH"],
    description: "High-grade Japanese silicon steel"
  }, {
    supplier: "ThyssenKrupp (Europe)",
    grades: ["M-3", "M-4", "M-5", "M-6", "HI-B"],
    description: "European premium electrical steel"
  }];
  return <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-red-700 md:text-5xl">
            Manufacturing <span className="text-primary text-5xl">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            State-of-the-art manufacturing processes combining traditional craftsmanship 
            with modern technology to deliver world-class transformers.
          </p>
        </div>

        <Tabs defaultValue="process" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="process">Manufacturing Process</TabsTrigger>
            <TabsTrigger value="testing">Quality Testing</TabsTrigger>
            <TabsTrigger value="materials">Raw Materials</TabsTrigger>
            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          </TabsList>

          <TabsContent value="process" className="space-y-16">
            {manufacturingSteps.map((step, index) => <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <step.icon className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">Advanced Technology</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {step.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {step.details.map((detail, detailIndex) => <div key={detailIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>)}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="overflow-hidden shadow-2xl">
                    <img src={step.image} alt={step.title} className="w-full h-80 object-cover" />
                  </Card>
                </div>
              </div>)}
          </TabsContent>

          <TabsContent value="testing" className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Comprehensive Testing Protocols</h3>
              <p className="text-xl text-muted-foreground">
                Every transformer undergoes rigorous testing following international standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testingProcedures.map((procedure, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <procedure.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{procedure.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {procedure.tests.map((test, testIndex) => <li key={testIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{test}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>)}
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-electric-blue/5 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-foreground mb-4">Quality Standards Compliance</h4>
                  <p className="text-muted-foreground">
                    All products manufactured in accordance with international standards
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {qualityStandards.map((standard, index) => <div key={index} className="text-center">
                      <Badge variant="outline" className="mb-2 text-primary border-primary">
                        {standard.standard}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{standard.description}</p>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="materials" className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Premium Raw Materials</h3>
              <p className="text-xl text-muted-foreground">
                Sourcing the finest materials from leading global suppliers for superior performance.
              </p>
            </div>

            <div className="space-y-8">
              {coreMaterials.map((material, index) => <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{material.supplier}</CardTitle>
                      <Badge variant="secondary">{material.description}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {material.grades.map((grade, gradeIndex) => <Badge key={gradeIndex} variant="outline" className="text-primary border-primary">
                          {grade}
                        </Badge>)}
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Factory className="h-5 w-5 mr-2 text-primary" />
                    Core Treatment Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Shot blasting treatment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Hot zinc spray coating
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      UV X-ray crack detection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Vacuum & pressure testing
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-electric-blue">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-electric-blue" />
                    Conductor Materials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-electric-blue mr-2" />
                      High-grade copper conductors
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-electric-blue mr-2" />
                      Aluminum foil winding options
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-electric-blue mr-2" />
                      Precision insulation materials
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-electric-blue mr-2" />
                      High-quality transformer oil
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="infrastructure" className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Manufacturing Infrastructure</h3>
              <p className="text-xl text-muted-foreground">
                Two advanced facilities with cutting-edge technology and skilled workforce.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-electric-blue/10 relative">
                  <img src="/lovable-uploads/a2a9380f-9e60-4f52-bd27-8f1676623beb.png" alt="Manufacturing Facility" className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Production Capacity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Annual Production</span>
                      <Badge variant="secondary">24,000+ Transformers</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Power Range</span>
                      <Badge variant="secondary">10 KVA - 10 MVA</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Voltage Class</span>
                      <Badge variant="secondary">Up to 33 KV</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-electric-blue/10 flex items-center justify-center">
                  <Factory className="h-24 w-24 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">R&D Capabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      In-house design team
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Custom solution development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Performance optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Continuous innovation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted/30">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-center text-foreground mb-8">
                  Quality Control Laboratory
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FlaskConical className="h-8 w-8 text-primary" />
                    </div>
                    <h5 className="font-semibold mb-2">In-house Testing</h5>
                    <p className="text-sm text-muted-foreground">
                      Complete electrical and mechanical testing facility
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h5 className="font-semibold mb-2">CPRI Testing</h5>
                    <p className="text-sm text-muted-foreground">
                      External validation at certified laboratories
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gauge className="h-8 w-8 text-primary" />
                    </div>
                    <h5 className="font-semibold mb-2">Quality Assurance</h5>
                    <p className="text-sm text-muted-foreground">
                      ISO 9001 certified quality management system
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>;
};
export default ProcessSection;