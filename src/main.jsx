import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ExperienceCard from "./components/ExperienceCard";
import "./index.css";
import NavBar from "./components/NavBar";
import ContainerOne from "./containers/ContainerOne";
import SkillCard from "./components/SkillCard";
import IntroRight from "./components/IntroRight";
import Test from "./components/Test";
import ClassOneOnState from "./components/classOneOnState";
import Recipes from "./components/Recipes";

createRoot(document.getElementById("root")).render(
  <div>
    <NavBar />
    {/* <ClassOneOnState/> */}
    <Recipes/>
    {/* <ContainerOne /> */}
    {/* <div className="flex gap-4">
      <SkillCard
        skillName={"Tailwind CSS"}
        imgSrc={
          "https://udaykumar.life/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.79614a5f61617ba49a0891494521226b.svg"
        }
      />
      <SkillCard
        skillName={"Python"}
        imgSrc={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAD30lEQVR42u2aW2gUVxjHTwutVYq0lYJuztm0kt40RZOZtZFelpYqlNbSUm0fhFKo+Cbog2RnNjKKqFHxAoI+iwiy4m3n5KJGIgq6Z7ImKPGConhDNF5jvBL183wPazYx65lZl7OL5A9/Zudlzv/HnHO+OR9LhvSmyHCSI0zLrTTt5DQjzmeYNp+Njlj8bzPm/m7WNlZFYttHkVJSdYwbMuR6w3JPmbb7TP4GHz5jWry+av7OECmmZOBlGHpSXQP8tboVJi9oxHAB7N4xYsmppBjCgTEEhj9y7gagznX1QHRRc1CIe2Zd0xdEt0yLr8MA09fsh2zN3egFAkAbtruJ6JYcdBsO/q3TBFduPQBUz8Ne+KW+JR+AS0UA4C2ZAFOW7IH4lnb4bcU+vA9ui98vGoDCpQzQNMaM8bEqGxa/XFAA/YvdPT8EkK++qW36xLD4UjnAQayehs3PBrbl9hYFAL9hZIAHisELvoghPWYEeOHZLyzYf9DGpsAhOpz4VSTuzsw8XDuAKB8NHoOXLFiXvE4jKk1yGkcalnuz5ADQgj6WIOMV22PDLJ3h0YbN7/oCQAvWqvrGSegGMC33hG8AdLr8y1dV2LO6AXCn6wMIfa4AQFtkMH0d4x9mDiUafaHGaf7oBUCK/qEGoG6uolOpefEeqYrtqiBZkuESSgBBr+QASEbzmwJumwyzQbrel23XMuP8Z+I4b/cLL+gPINgzJQC6ffTHZKCq4w0/Bdw9PMNOVpMCCFJlE8CjVzGcHw+6nWLXIADA7pp5ieGvHVyERoFgcel7GMy/aZQMFHYJfG571yY4Oz7oP3dDDDy2GBcYCLpXaY+2SHeCx3qlIbBT7PtcnYYuH1OndsDc/RMEu48P1ubD5V/lKmTNKoBI3a7xWVNgogR4pDW8YE8hVTFy8EJm8ZgKYJyTeL8PgG3TGh4taHvuSlybDKuKWcWcxmFZ+3a3dgCPrlKdBXb4AYDOce9qD49Oh6uVB3Y8CioBTlcM0w9A0/67Dra72bDchyUDgFU6VfYjCaKo0/oeno2zWyWEwFu6ATC89EJSKAUDoN3SifzMNksvh1RZDUEVCaCTFEBDAHkDCHYRRHiG2qHJ2gEKXGG36gVIG+/kFfTodwDnFwAciw6cagmiW+DRa4HCt1cC9N4GQD3pAeioyn4Da/QDCLo2EMDxX6GfTk7v2+dxDegWftbKAB2+Ado+Beg+AIC6K+T92AzASlIsYUMW3wR+p/sG6ZiYCX4dBJ1JFNIFEgaPOiCYpzgq3gCPckixfxGelJ4ybXIawY4ypOj/8vqPDDwVDpd9NvSnjDdNzwGk8b/raWU/WQAAAABJRU5ErkJggg=="
        }
      />
      <SkillCard
        skillName={"Swagger"}
        imgSrc={
          "https://udaykumar.life/static/media/SwaggerLogo.afd1bfb8320b5e8ca2ce.png"
        }
      />
    </div> */}
    {/* <IntroRight /> */}
    <div>
      {/* <Test/> */}
    </div>
  </div>
);
