interface DioBankProps {
  login: boolean
}

const dioBank = {
  login: false,
};

export const getAlllocalStorage = (): string | null => {
  return localStorage.getItem("diobank");
};

export const createlocalStorage = (): void => {
  localStorage.setItem("diobank", JSON.stringify(dioBank));
};
export const changeLocalStorage = (DioBank: DioBankProps): void => {
    localStorage.setItem("diobank", JSON.stringify(DioBank))
};
