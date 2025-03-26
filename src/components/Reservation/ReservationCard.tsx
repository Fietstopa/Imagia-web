import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
interface Props {
  label: string;
  hours: number;
  style: string;
}

export default function MyApp({ label, hours, style }: Props) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: `rezervace-${String(hours)}h-platebni-karta`,
      });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [hours]);

  return (
    <button
      // Vygeneruje například "rezervace-4h-platebni-karta"
      data-cal-namespace={`rezervace-${hours}h-platebni-karta`}
      // Tady také přizpůsobte link tak, aby seděl se založenou událostí
      data-cal-link={`fotoatelier-imagia/rezervace-${hours}h-platebni-karta`}
      data-cal-config='{"layout":"month_view"}'
      className={style}
    >
      {label}
    </button>
  );
}
