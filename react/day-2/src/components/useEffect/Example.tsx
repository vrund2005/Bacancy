import Empty from "./Empty";
import NoDependency from "./NoDependency";
import WithDependency from "./WithDependency";

type Example_Props = {
  dependencyType: "NO_DEPENDENCY" | "EMPTY_DEPENDENCY" | "WITH_DEPENDENCY";
};

const Example = ({ dependencyType }: Example_Props) => {
  const renderByDependencyType = (type: typeof dependencyType) => {
    switch (type) {
      case "EMPTY_DEPENDENCY":
        return <Empty />;
      case "NO_DEPENDENCY":
        return <NoDependency />;
      case "WITH_DEPENDENCY":
        return <WithDependency />;

      default:
        return <></>;
    }
  };

  return <>{renderByDependencyType(dependencyType)}</>;
};

export default Example;
