/** Shared motion tokens (Emil Kowalski: strong ease-out, UI under 300ms). */
export const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const;

export const tabIndicator = { type: "tween", duration: 0.24, ease: EASE_OUT_QUINT } as const;

export const swap = { duration: 0.22, ease: EASE_OUT_QUINT } as const;
