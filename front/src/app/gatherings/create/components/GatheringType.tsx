import Button from "@/app/gatherings/components/Button";
import useFormStore from "@/store/gatherings/useFormStore";

function Type() {
  const { type, setType } = useFormStore();

  return (
    <div className="grid grid-cols-2 gap-6 py-4">
      <Button
        variant={type === "project" ? "primary" : "secondary"}
        onClick={() => setType("project")}
      >
        프로젝트
      </Button>
      <Button
        variant={type === "study" ? "primary" : "secondary"}
        onClick={() => setType("study")}
      >
        스터디
      </Button>
    </div>
  );
}

export default Type;
