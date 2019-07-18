import React from 'react';
import RadioButtonField from './RadioButtonField';
import RadioOptionType from './RadioOptionType';

export interface RadioGroupProps {
  className?: string;
  classNameLabel?: string;
  inputStyle?: object;
  labelStyle?: object;
  name: string;
  options: RadioOptionType[];
}

const RadioButtonGroup: React.FC<RadioGroupProps> = ({
  className,
  classNameLabel,
  inputStyle,
  labelStyle,
  name,
  options,
}: RadioGroupProps) => {
  const displayRadioButtons: React.ReactNode = options.map(({
    id,
    label,
  }: RadioOptionType) => (
      <div key={id}>
        <RadioButtonField
          className={className}
          classNameLabel={classNameLabel}
          id={id}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
          name={name}
          label={label}
        />
      </div>
    ));

  return (
    <div>
      {displayRadioButtons}
    </div>
  );
};

RadioButtonGroup.defaultProps = {
  className: '',
  classNameLabel: '',
  inputStyle: {},
  labelStyle: {},
};

export default RadioButtonGroup;
