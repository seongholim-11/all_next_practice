"use client";

import { usePathname, useRouter } from "next/navigation";

export default function DetailLink() {
    let router = useRouter();
    let a = usePathname;

    return (
        <div>
            <button
                onClick={() => {
                    router.prefetch("/detail/eafd");
                }}
            >
                페이지 이동
            </button>
        </div>
    );
}
