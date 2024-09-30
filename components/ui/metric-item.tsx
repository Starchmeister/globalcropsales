interface MetricItemProps {
  title: string;
  metric: string;
  description?: string;
  metricType?: string;
}

export default function MetricItem({
  title,
  metric,
  description,
}: MetricItemProps) {
  return (
    <div className="flex flex-col gap">
      <p className="text-[16px] p-0 md:text-left tracking-[-1px] font-medium">
        {title}
      </p>
      <h3 className="text-[32px] font-bold p-0  text-gcs_green">{metric}</h3>
      <p className="text-gcs_green p-0  text-[13px]">{description}</p>
    </div>
  );
}
