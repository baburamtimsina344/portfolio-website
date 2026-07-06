// import { motion } from "framer-motion";
// import { Mail, Share2, GraduationCap, BookOpen } from "lucide-react";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import { cn } from "@/lib/utils";
// import type { SocialLink } from "@/types";

// const iconMap = {
//   researchgate: BookOpen,
//   scholar: GraduationCap,
//   facebook: Share2,
//   email: Mail,
  
// };

// interface SocialLinksProps {
//   links: SocialLink[];
//   className?: string;
//   size?: "sm" | "md" | "lg";
// }

// export function SocialLinks({ links, className, size = "md" }: SocialLinksProps) {
//   const sizeClasses = { sm: "h-8 w-8", md: "h-10 w-10", lg: "h-12 w-12" };
//   const iconSizes = { sm: "h-3.5 w-3.5", md: "h-4 w-4", lg: "h-5 w-5" };

//   return (
//     <TooltipProvider delayDuration={200}>
//       <div className={cn("flex items-center gap-3", className)}>
//         {links.map((link) => {
//           const Icon = iconMap[link.icon];
//           return (
//             <Tooltip key={link.name}>
//               <TooltipTrigger asChild>
//                 <motion.a
//                   href={link.url}
//                   target={link.icon === "email" ? undefined : "_blank"}
//                   rel="noopener noreferrer"
//                   aria-label={link.name}
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={cn(
//                     "inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-colors hover:bg-primary hover:text-white hover:border-primary",
//                     sizeClasses[size]
//                   )}
//                 >
//                   <Icon className={iconSizes[size]} />
//                 </motion.a>
//               </TooltipTrigger>
//               <TooltipContent>{link.name}</TooltipContent>
//             </Tooltip>
//           );
//         })}
//       </div>
//     </TooltipProvider>
//   );
// }



import { motion } from "framer-motion";
import { Mail, Share2, GraduationCap, BookOpen } from "lucide-react";
import { FaLinkedin, FaOrcid } from "react-icons/fa"; // <-- import
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types";

const iconMap = {
  researchgate: BookOpen,
  scholar: GraduationCap,
  facebook: Share2,
  email: Mail,
  linkedin: FaLinkedin,
  orcid: FaOrcid, // <-- added
};

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SocialLinks({ links, className, size = "md" }: SocialLinksProps) {
  const sizeClasses = { sm: "h-8 w-8", md: "h-10 w-10", lg: "h-12 w-12" };
  const iconSizes = { sm: "h-3.5 w-3.5", md: "h-4 w-4", lg: "h-5 w-5" };

  return (
    <TooltipProvider delayDuration={200}>
      <div className={cn("flex items-center gap-3", className)}>
        {links.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <Tooltip key={link.name}>
              <TooltipTrigger asChild>
                <motion.a
                  href={link.url}
                  target={link.icon === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-colors hover:bg-primary hover:text-white hover:border-primary",
                    sizeClasses[size]
                  )}
                >
                  <Icon className={iconSizes[size]} />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>{link.name}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}