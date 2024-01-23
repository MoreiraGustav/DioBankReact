import {
  changeLocalStorage,
  createlocalStorage,
  getAlllocalStorage,
} from "./storage";
const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
const dioBank = {
  login: false,
};

describe("storage", () => {
  const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
  it("Deve retornar o objeto no localStorage com a chave dio bank", () => {
    getAlllocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("diobank");
  });

  it("Deve Criar o objeto no localStorage", () => {
    createlocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });
  it("deve alterar o valor do objeto no LocalStorage", () => {
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
  });
});
