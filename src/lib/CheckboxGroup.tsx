import React from 'react';
import CheckboxField from './CheckboxField';
import CheckOptionType from './CheckOptionType';

export interface CheckboxGroupProps {
  className?: string | null;
  classNameLabel?: string | null;
  labelStyle?: object;
  options: CheckOptionType[];
  style?: object;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  className,
  classNameLabel,
  labelStyle,
  options,
  style,
}: CheckboxGroupProps) => {
  const displayCheckboxes: React.ReactNode = options.map(({
    id,
    label,
    name,
  }: CheckOptionType) => (
      <div key={name}>
        <CheckboxField
          className={className}
          classNameLabel={classNameLabel}
          id={id}
          label={label}
          labelStyle={labelStyle}
          name={name}
          style={style}
        />
      </div>
    ));

  return (
    <div>
      {displayCheckboxes}
    </div>
  );
};

CheckboxGroup.defaultProps = {
  className: null,
  classNameLabel: null,
  labelStyle: {},
  style: {},
};

export default CheckboxGroup;
