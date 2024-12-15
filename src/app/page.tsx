import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <Card className="w-[400px] h-[400px] bg-muted ">
      <Button>ボタン</Button>
      <Badge variant="outline">バッジ</Badge>
    </Card>
  );
}
