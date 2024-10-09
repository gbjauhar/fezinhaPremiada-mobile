export type DOZEN_TYPE = {
  id: number;
  selected: boolean;
};

const initialDozens = Array(29).fill(0);

export const DOZENS: DOZEN_TYPE[] = initialDozens.reduce(
  (acc, _) => {
    return [...acc, {id: acc.length + 1, selected: false}];
  },
  [{id: 1, selected: false}],
);
