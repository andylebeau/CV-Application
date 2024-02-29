export default function InputField({
  id,
  type,
  label,
  name,
  placeholder,
  onChange,
}) {
  return (
    <input
      id={id}
      type={type}
      label={label}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
