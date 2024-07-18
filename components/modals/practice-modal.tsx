"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { usePracticeModal } from "@/store/use-practice-modal";

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();

  useEffect(() => setIsClient(true), []);

  //   fixing hydration error
  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div>
            <Image src="/heart.svg" alt="Heart" height={100} width={100} />
          </div>
          <DialogTitle className="text-center font-bold">
            Practice lesson
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Use Practice lesson to regain hearts and points. You cannot loose
            hearts or points in the practice lessons.
          </DialogDescription>
          <DialogFooter className="mb-4">
            <div className="flex flex-col gap-y-4 w-full">
              <Button
                variant="primary"
                className="w-full"
                size="lg"
                onClick={close}
              >
                I understand
              </Button>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
