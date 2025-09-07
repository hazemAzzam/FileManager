import React, { useCallback, useEffect, useState } from "react";
import { ExtendedFile } from "../types/ExtendedFile";
import {
  Box,
  Card,
  CardHeader,
  CircularProgress,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { FileThumbnail } from "@/fileManager/components/FileThumbnail";
import { convertByteToMegabyte } from "@/shared/utils";
import { useFileManagerStore } from "../hooks/useFileManagerStore";

type Props = ExtendedFile;
export default function UploadFilesProgressCard({
  file,
  id,
  uploadStatus,
  uploadProgress,
}: Props) {
  const { removeFile } = useFileManagerStore();

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (uploadStatus === "success") {
      let progressValue = 0;

      const interval = setInterval(() => {
        progressValue += 3;
        setProgress((prev) => prev + 3);
        if (progressValue >= 100) {
          removeFile(id);
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [id, removeFile, uploadStatus]);

  const getStatusColor = useCallback(() => {
    switch (uploadStatus) {
      case "success":
        return "success";
      case "error":
        return "error";
      default:
        return "info";
    }
  }, [uploadStatus]);

  return (
    <Card
      component="div"
      sx={{ textAlign: "left" }}
      onClick={(e) => e.stopPropagation()}
    >
      <CardHeader
        action={
          <Box position="relative">
            <CircularProgress
              variant="determinate"
              color="inherit"
              value={progress}
              size={40}
              thickness={4}
            />
            <Stack
              sx={{
                inset: 0,
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton onClick={() => removeFile(id)}>
                <CloseRounded />
              </IconButton>
            </Stack>
          </Box>
        }
        avatar={<FileThumbnail name={file.name} />}
        title={file.name}
        subheader={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: 1, mr: 1 }}>
              <Typography>{convertByteToMegabyte(file.size)}</Typography>
              <LinearProgress
                variant="determinate"
                value={uploadProgress}
                aria-label={`Progress: ${uploadProgress ?? 0}%`}
                color={getStatusColor()}
                sx={(theme) => ({
                  height: theme.spacing(1),
                  borderRadius: theme.shape.borderRadius,
                  "& .MuiLinearProgress-bar": {
                    borderRadius: theme.shape.borderRadius,
                  },
                })}
              />
              <Typography variant="body2" color="text.secondary">{`${Math.round(
                uploadProgress ?? 0
              )}%`}</Typography>
            </Box>
          </Box>
        }
        disableTypography
      />
    </Card>
  );
}
