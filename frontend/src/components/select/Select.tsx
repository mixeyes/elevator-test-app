import { FC, useMemo } from 'react';
import Select from 'react-select';
import { IBuildings } from '../../utils';
import styled from 'styled-components';

interface ISelectBuildings {
  buildings: IBuildings;
}

type OptionType = { value: string; label: string };
type OptionsType = Array<OptionType>;

const MultiSelect = styled(Select)`
  .Select__control {
    height: 40px;
    width: 100%;
    border: 1px solid #a1a1a1;
    border-radius: 0;
    cursor: pointer;
  }

  .Select__control:hover {
    border-color: #a1a1a1;
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px black;
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    color: #3c3d3e;
  }
`;

export const SelectBuildings: FC<ISelectBuildings> = ({ buildings }) => {
  const options: OptionsType = useMemo(() => {
    return Object.entries(buildings).reduce((acc, [key, val]) => {
      acc.push({ value: key, label: val.name });
      return acc;
    }, [] as OptionsType);
  }, [buildings]);

  return <MultiSelect isMulti options={options} classNamePrefix={'Select'} />;
};
