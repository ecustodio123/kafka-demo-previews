import { ArrowRight, ShoppingBag } from "lucide-react";

import { Badge, Button, Card } from "../ui/primitives";
import { cn } from "../../lib/utils";

export function CommerceRedirectSection({
  id = "catalogo",
  eyebrow = "Catálogo online",
  title,
  description,
  products = [],
  ctaLabel = "Comprar online",
  ctaHref = "/tiendas-prueba",
  secondaryLabel,
  secondaryHref,
  note,
  className,
  containerClassName = "max-w-[1160px]",
  theme = {},
}) {
  return (
    <section className={cn("px-4 py-20 sm:px-6 lg:px-8", className)} id={id}>
      <div className={cn("mx-auto grid gap-10", containerClassName)}>
        <div className="grid gap-7">
          <div>
            <Badge
              className={cn(
                "border-neutral-200 bg-white text-neutral-700",
                theme.badge,
              )}
            >
              {eyebrow}
            </Badge>
            <h2
              className={cn(
                "mt-5 max-w-[1120px] text-[clamp(1.6rem,3.5vw,3.8rem)] font-black leading-[0.93] tracking-normal text-balance",
                theme.heading,
              )}
            >
              {title}
            </h2>
          </div>

          <div className="grid gap-3 sm:max-w-[520px] sm:grid-cols-2"></div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <Card
              className={cn(
                "group overflow-hidden rounded-[1.75rem] border bg-white p-0 shadow-[0_24px_80px_rgba(15,23,42,0.09)]",
                theme.card,
              )}
              key={product.title}
            >
              <div className="relative overflow-hidden">
                <img
                  className="aspect-[4/3.15] w-full object-cover"
                  src={product.image}
                  alt={product.title}
                  loading="eager"
                  decoding="async"
                />
                {product.tag ? (
                  <span
                    className={cn(
                      "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-black shadow-sm",
                      theme.tag,
                    )}
                  >
                    {product.tag}
                  </span>
                ) : null}
              </div>
              <div className="p-5">
                <h3
                  className={cn(
                    "text-2xl font-black leading-[1.05]",
                    theme.productTitle,
                  )}
                >
                  {product.title}
                </h3>
                <p className={cn("mt-3 text-base font-black", theme.price)}>
                  {product.price}
                </p>
              </div>
            </Card>
          ))}
          <Button
            asChild
            size="lg"
            className={cn("min-h-14 rounded-full px-6", theme.primaryButton)}
          >
            <a href={ctaHref}>
              <ShoppingBag aria-hidden="true" className="shrink-0" size={18} />
              {ctaLabel}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
