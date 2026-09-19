import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import IconLoader from "../iconLoader";
interface IMyAppProps {
  label: string;
  hours: number;
  style: string;
}
export default function ReservationCash({ label, hours, style }: IMyAppProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: `rezervace-${hours}h-sal-1-hotovost` });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, [hours]);
  return (
    <button
      data-cal-namespace={`rezervace-${hours}h-sal-1-hotovost`}
      data-cal-link={`archdeco-zqdn9b/rezervace-${hours}h-sal-1-hotovost`}
      data-cal-config='{"layout":"month_view"}'
      className={style}
    >
      <IconLoader link="/cash.svg" styles="w-10 h-10" />

      {label}
    </button>
  );
}
