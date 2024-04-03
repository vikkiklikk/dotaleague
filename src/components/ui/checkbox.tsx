interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
  }
  
  const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );

  export {Checkbox}