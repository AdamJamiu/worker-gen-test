import Card from "./_components/Card";
import Table from "./_components/Table";

export default function IndividualUsers() {
  return (
    <section className="relative bg-neutralBase min-h-screen py-10 p-4 sm:p-10 md:py-28 lg:py-32 md:pl-10 md:pr-8 lg:px-4 lg:pl-16 2xl:pl-20 lg:ml-[200px]">
      <div className="w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7">
          <Card
            individuals="1000"
            vendors="2000"
            organizations="2000"
            theme="green"
            label="Total users"
          />
          <Card
            individuals="1000"
            organizations="2000"
            vendors="2000"
            theme="blue"
            label="Awarded points"
          />
          <Card
            pending="100"
            completed="2000"
            theme="yellow"
            label="Recycle requests"
          />
        </div>
        <h1 className="font-clash_display_semibold text-neutral-700 text-sm sm:text-base md:text-lg xl:text-xl mt-7">
          Organizations & Vendors
        </h1>
        <Table />
      </div>
    </section>
  );
}
