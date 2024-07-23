"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { refilHearts } from "@/actions/user-progress";
import { toast } from "sonner";

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

const POINTS_TO_REFILL = 10;

export const Items = ({ hearts, points, hasActiveSubscription }: Props) => {
  const [pending, startTransition] = useTransition();

  const onRefilHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
      return;
    }

    startTransition(() => {
      refilHearts().catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <ul className="w-full">
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image src="/heart.svg" alt="Heart" height={60} width={60} />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl">Refill hearts</p>
        </div>
        <Button
          onClick={onRefilHearts}
          disabled={pending || hearts === 5 || points < POINTS_TO_REFILL}
        >
          {hearts === 5 ? (
            "full"
          ) : (
            <div className="flex items-center">
              <Image src="/points.svg" alt="Points" height={20} width={20} />
              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>
    </ul>
  );
};
