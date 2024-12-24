import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { useConversation } from "@11labs/react";

export function ChatDialog() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const conversation = useConversation();

  const startChat = async () => {
    try {
      await conversation.startSession({
        agentId: "default", // Replace with your actual agent ID
      });
    } catch (error) {
      console.error("Failed to start chat:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 rounded-full w-12 h-12 p-0"
          size="icon"
          onClick={startChat}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("chat.title")}</DialogTitle>
          <DialogDescription>
            {t("chat.description")}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="h-[300px] overflow-y-auto border rounded-md p-4">
            {/* Chat messages will go here */}
          </div>
          <div className="flex gap-2">
            <Button onClick={() => conversation.endSession()}>
              {t("chat.endChat")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}