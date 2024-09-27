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
    <div>
      <p className="text-[16px] mb-2  md:text-left tracking-[-1px] font-medium">
        {title}
      </p>
      <h3 className="text-[32px] text-gcs_green">{metric}</h3>
      <p className="text-gcs_green  text-[13px]">{description}</p>
    </div>
  );
}
