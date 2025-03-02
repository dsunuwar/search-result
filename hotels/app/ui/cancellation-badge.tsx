"use client";

import { CancellationType } from "@/app/lib/definitions";

type Prop = {
  type: CancellationType;
};

export default function CancellationBadge({ type }: Prop) {
  return type === CancellationType.freeCancellation ? (
    <span style={{ color: "#0F7401" }}>Free cancellation</span>
  ) : (
    <span style={{ color: "#323232" }}>Non-refundable</span>
  );
}
