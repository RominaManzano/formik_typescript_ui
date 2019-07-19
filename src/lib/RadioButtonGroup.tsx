import React from 'react';
import RadioButtonField from './RadioButtonField';
import RadioOptionType from './RadioOptionType';

export interface RadioGroupProps {
  className?: string;
  classNameLabel?: string;
  labelStyle?: object;
  name: string;
  options: RadioOptionType[];
  style?: object;
}

const RadioButtonGroup: React.FC<RadioGroupProps> = ({
  className,
  classNameLabel,
  labelStyle,
  name,
  options,
  style,
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
          labelStyle={labelStyle}
          name={name}
          label={label}
          style={style}
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
  labelStyle: {},
  style: {},
};

export default RadioButtonGroup;
