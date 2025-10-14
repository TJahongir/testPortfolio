import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Calendar, ExternalLink, MessageCircle, BookOpen } from "lucide-react";
import { contactInfo, contactSectionData } from "../data/data";

export function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-foreground">
            {contactSectionData.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contactSectionData.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-l-4 border-l-sage-green">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sage-green">
                  <MessageCircle className="w-5 h-5" />
                  Get in Touch
                </CardTitle>
                <CardDescription>
                  {contactSectionData.cardDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-sage-green" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-sage-green hover:text-primary transition-colors cursor-pointer">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors cursor-pointer">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Office Phone</p>
                    <p className="text-sm text-sage-green hover:text-primary transition-colors cursor-pointer">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors cursor-pointer">
                  <MapPin className="w-5 h-5 text-sage-green" />
                  <div>
                    <p className="font-medium">Office Location</p>
                    <p className="text-sm text-muted-foreground">
                      {contactInfo.officeLocation.campus}<br />
                      {contactInfo.officeLocation.address}<br />
                      {contactInfo.officeLocation.city}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors cursor-pointer">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-sm text-muted-foreground" style={{ whiteSpace: 'pre-line' }}>
                      {contactInfo.officeHours}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Academic CV
              </Button>
              <Button 
                className="flex-1 bg-sage-green hover:bg-sage-green/90 text-white cursor-pointer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Google Scholar
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-primary">Send a Message</CardTitle>
              <CardDescription>
                Use this form for research inquiries, collaboration proposals, or general questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name" 
                      className="border-sage-green/30 focus:border-sage-green"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name" 
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="border-sage-green/30 focus:border-sage-green"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="institution">Institution/Organization</Label>
                  <Input 
                    id="institution" 
                    placeholder="Your affiliation" 
                    className="border-primary/30 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Brief subject line" 
                    className="border-sage-green/30 focus:border-sage-green"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    className="min-h-[120px] border-primary/30 focus:border-primary" 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-sage-green hover:bg-sage-green/90 text-white cursor-pointer"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}