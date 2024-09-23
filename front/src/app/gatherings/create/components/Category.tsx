import Button from "@/app/gatherings/components/Button";
import useFormStore from "@/store/gatherings/useFormStore";

function Category() {
  const { category, setCategory } = useFormStore();

  return (
    <div className="grid grid-cols-2 gap-6 py-4">
      <Button
        variant={category === "project" ? "primary" : "secondary"}
        onClick={() => setCategory("project")}
      >
        프로젝트
      </Button>
      <Button
        variant={category === "study" ? "primary" : "secondary"}
        onClick={() => setCategory("study")}
      >
        스터디
      </Button>
    </div>
  );
}

export default Category;
