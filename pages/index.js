import Logger from "../components/Logger";
import Counter from "../components/Counter";
import PageVisibility from "../components/PageVisibility";

const Index = () => (
  <div>
    <PageVisibility>
      {({ hidden, focus, active }) => (
        <div className="container">
          <h1>
            This page has been{" "}
            <span className="text-success">
              {active ? "active" : "inactive"}
            </span>{" "}
            by
          </h1>
          <Counter key={`${hidden.toString()}-${focus.toString()}`} />
          <Logger hidden={hidden} focus={focus} active={active} />
        </div>
      )}
    </PageVisibility>

    <style jsx>{`
      .container {
        max-width: 600px;
        margin: 2rem auto 0;
        text-align: center;
      }

      h1 {
        font-size: 1.2rem;
      }
    `}</style>
  </div>
);

export default Index;
