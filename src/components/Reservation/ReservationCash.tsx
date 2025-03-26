import { getCalApi } from "@calcom/embed-react";
import { div } from "framer-motion/client";
import { useEffect } from "react";
import IconLoader from "../iconLoader";
interface IMyAppProps {
  label: string;
  style: string;
}
export default function MyApp({ label, style }: IMyAppProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "rezervace-hotovost" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <button
      data-cal-namespace="rezervace-hotovost"
      data-cal-link="fotoatelier-imagia/rezervace-hotovost"
      data-cal-config='{"layout":"month_view"}'
      className={style}
    >
      <IconLoader link="/cash.svg" styles="w-10 h-10" />

      {label}
    </button>
  );
}
