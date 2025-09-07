import { create } from "zustand";
import { ExtendedFile } from "../types/ExtendedFile";

type FileState = {
  files: ExtendedFile[];
};

type FileActions = {
  appendFiles: (acceptedFiles: File[]) => void;
  removeFile: (id: string) => void;
};

type FileSlice = FileState & FileActions;

export const useFileManagerStore = create<FileSlice>()((set) => ({
  files: [],
  appendFiles: (acceptedFiles) =>
    set((state) => {
      const newFiles: ExtendedFile[] = acceptedFiles
        .filter((file) => {
          const isDuplicate = state.files.some(
            (subItem) => subItem.id === `${file.name}${file.size}`
          );
          return !isDuplicate;
        })
        .map((file) => ({
          file,
          id: `${file.name}${file.size}`,
          uploadStatus: "idle",
          uploadProgress: 0,
        }));
      return {
        files: [...state.files, ...newFiles],
      };
    }),
  removeFile: (id) =>
    set((state) => {
      const newFiles = state.files.filter((file) => file.id !== id);
      return { files: newFiles };
    }),
}));
