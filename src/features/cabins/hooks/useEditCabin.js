import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { editCabin as editCabinApi } from "../../../services/apiCabins";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editCabin } = useMutation({
    mutationFn: editCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully updated");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}
