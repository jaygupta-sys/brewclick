'use client';
import { useEffect, useState, useCallback } from "react";

export default function Typewriter({names}: {names: string[]}) {
    const [text, setText] = useState(names[0]);
    
    const shuffle = useCallback(() => {
        let index = names.indexOf(text);
        if (index + 1 == names.length) {
            setText(names[0]);
            return;
        }
        setText(names[index + 1]);
    }, [names, text]);

    useEffect(() => {
        const listener = (e: AnimationEvent) => {
            if (e.animationName.includes("typing")) {
                shuffle();
            }
        }

        document.addEventListener("animationiteration", listener as any);

        return () => document.removeEventListener("animationiteration", listener as any);
    }, [shuffle])

    return (
        <>{text}</>
    )
}
