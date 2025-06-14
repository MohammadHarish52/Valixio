import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6";
const Team = () => {
  const teamMembers = [
    {
      name: "Vaishnavi Singh",
      role: "Founder & CEO",
      image: "../../public/vaishnavi.png",
      description: "Sales marketing expert with 80% conversion rate",
      xLink: "https://x.com/vaishchhu24",
    },
    {
      name: "Mohammad Harish",
      role: "Co-Founder & CTO",
      image: "../../public/Harish.png",
      description:
        "Founder InfiniteStudioX, Ex cracked devs and full stack engineer",
      xLink: "https://x.com/Harish_52",
    },
  ];

  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built by experienced professionals who understand the pain of bad
            leads
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="glass-card border-border min-h-[400px] hover:border-border/60 transition-all duration-300"
            >
              <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center ring-2 ring-border/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-medium text-foreground mb-3 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4 text-base">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-base mb-8 leading-relaxed max-w-xs">
                    {member.description}
                  </p>
                </div>
                <div className="w-full">
                  <Button
                    variant="outline"
                    asChild
                    className="w-full gap-2 border-border hover:bg-accent hover:text-foreground py-3"
                  >
                    <a
                      href={member.xLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect on <FaXTwitter className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
