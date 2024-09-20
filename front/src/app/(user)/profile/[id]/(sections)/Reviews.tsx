import Template from "../components/Template";

const badges: { [key: string]: { imgUrl: string; comment: string } } = {
  c1: { imgUrl: "", comment: "코멘트1" },
  c2: { imgUrl: "", comment: "코멘트2" },
  c3: { imgUrl: "", comment: "코멘트3" },
  c4: { imgUrl: "", comment: "코멘트4" },
  c5: { imgUrl: "", comment: "코멘트5" },
};

const data = [
  { rank: 1, key: "c1", count: 21 },
  { rank: 2, key: "c2", count: 13 },
  { rank: 3, key: "c3", count: 10 },
];

interface DataInterface {
  rank: number;
  key: string;
  count: number;
}

const Badge = ({ className }: { className: string }) => (
  <div
    className={`w-[100px] h-[100px] bg-[#D9D9D9] rounded-full ${className}`}
  ></div>
);

export default function Reviews() {
  return (
    <Template>
      <h3 className="text-lg font-bold mb-8">받은 평가</h3>
      <div className="flex flex-row justify-between">
        {data.map((item: DataInterface, i) => (
          <div key={`${item}-${i}`} className="text-center">
            <Badge className="mb-4" />
            <p className="text-sm font-semibold text-gray-13">
              {badges[item.key].comment}
            </p>
          </div>
        ))}
      </div>
    </Template>
  );
}
