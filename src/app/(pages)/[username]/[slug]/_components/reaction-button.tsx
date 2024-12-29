"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tables } from "@/types/database.types";

const REACTION_ICONS = {
  like: "👍",
  interest: "👀",
  heart: "❤️‍🔥",
  check: "✅",
  memo: "🫐",
};

interface ReactionButtonProps {
  contentId: number;
  reactionType: Tables<"reactions">["reaction_type"];
  reactionCount: number;
  hasReacted: boolean;
}

const ReactionButton = (props: ReactionButtonProps) => {
  return (
    <Button
      variant={"ghost"}
      size={"sm"}
      className="px-2.5 py-0.5 h-6.5"
      asChild
    >
      <Badge
        variant={"outline"}
        className="rounded-full text-sm text-muted-foreground hover:bg-emerald-100/80"
      >
        {REACTION_ICONS[props.reactionType]} 2
      </Badge>
    </Button>
  );
};

export default ReactionButton;
