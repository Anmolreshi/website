import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import Translation from "components/translation";
import { useTranslation } from "next-i18next";
import classes from "./style.module.css";

export default function AddExplanation({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t } = useTranslation("common");

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle className={classes.title}>{t("addExplanation")}</DialogTitle>
      <DialogContent>
        <Typography className={classes.paragraph}>
          <Translation
            name="addExplanationInfo"
            links={[
              "https://github.com/TheAlgorithms/Algorithms-Explanation",
              "https://github.com/TheAlgorithms/Algorithms-Explanation/blob/master/en/Sorting%20Algorithms/Quick%20Sort.md",
            ]}
          />
        </Typography>
        <Typography className={classes.paragraph}>
          <Translation
            name="editPageHelp"
            links={["https://discord.gg/c7MnfGFGa6"]}
          />
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
