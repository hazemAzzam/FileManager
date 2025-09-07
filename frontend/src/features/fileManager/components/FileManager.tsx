import {
  alpha,
  Box,
  ButtonBase,
  colors,
  Stack,
  Typography,
} from "@mui/material";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import { useDropzone } from "react-dropzone";
import { useFileManagerStore } from "../hooks/useFileManagerStore";
import UploadFilesProgressCard from "./uploadFilesProgressCard";
import { FilesDataGrid } from "@/fileManager/components/FilesDataGrid";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function FileManager() {
  const { files, appendFiles } = useFileManagerStore();
  const { getInputProps, getRootProps } = useDropzone({ onDrop: appendFiles });
  const [autoAnimateRef] = useAutoAnimate();

  return (
    <Stack gap={2}>
      <Stack>
        <Typography variant="h4">File Manager</Typography>
        <Typography variant="body1">
          Files and assets that have been uploaded as part of this project.
        </Typography>
      </Stack>
      <ButtonBase
        sx={(theme) => ({
          backgroundColor: alpha(colors.grey[500], 0.1),

          width: 1,
          borderRadius: `${theme.shape.borderRadius}px`,
        })}
        {...getRootProps()}
      >
        <Stack
          sx={(theme) => ({
            alignItems: "center",
            gap: 2,
            width: 1,
            padding: 3,
            borderRadius: `${theme.shape.borderRadius}px`,
          })}
        >
          <Box component="input" {...getInputProps()} />
          <FileUploadRoundedIcon fontSize="large" />
          <Stack
            sx={{
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>Click or drag and drop files to upload</Typography>
            <Typography>Max 10GB</Typography>
          </Stack>
        </Stack>
      </ButtonBase>
      <Stack>
        {files.map((file) => (
          <Stack key={file.id} ref={autoAnimateRef}>
            <UploadFilesProgressCard {...file} />
          </Stack>
        ))}
      </Stack>
      <FilesDataGrid />
    </Stack>
  );
}
