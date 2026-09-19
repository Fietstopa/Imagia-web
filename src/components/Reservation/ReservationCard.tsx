import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
interface Props {
  label: string;
  hours: number;
  style: string;
}

export default function ReservationCard({ label, hours, style }: Props) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: `rezervace-${hours}h-sal-1-platebni-karta`,
      });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [hours]);

  return (
    <button
      data-cal-namespace={`rezervace-${hours}h-sal-1-platebni-karta`}
      data-cal-link={`archdeco-zqdn9b/rezervace-${hours}h-sal-1-platebni-karta`}
      data-cal-config='{"layout":"month_view"}'
      className={style}
    >
      {label}
    </button>
  );
}
