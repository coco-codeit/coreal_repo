import Button from "@/app/gatherings/components/Button";
import useFormStore from "@/store/gatherings/useFormStore";

function Connection() {
  const { connection, setConnection } = useFormStore();

  return (
    <div className="flex flex-col gap-2">
      <label>진행방식</label>
      <div className="grid grid-cols-2 gap-6">
        <Button
          variant={connection === "online" ? "primary" : "secondary"}
          onClick={() => setConnection("online")}
        >
          온라인
        </Button>
        <Button
          variant={connection === "offline" ? "primary" : "secondary"}
          onClick={() => setConnection("offline")}
        >
          오프라인
        </Button>
      </div>
    </div>
  );
}

export default Connection;
