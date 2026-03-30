import { ShoppingCart, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { BRAND_COLOR, formatProductQuantity, generateWhatsAppCartLink } from "@/data/products";

function formatCartLabel(count: number) {
  if (count === 1) return "1 item";
  return `${count} items`;
}

export default function CartSheet() {
  const { items, totalItems, setQuantity, removeItem, clearCart } = useCart();

  const checkoutHref =
    items.length > 0 ? generateWhatsAppCartLink(items) : undefined;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-xl p-2 text-[#1A1A1A] hover:bg-black/5 transition-colors"
          aria-label="Open cart"
        >
          <ShoppingCart className="w-5 h-5" />
          {totalItems > 0 && (
            <span
              className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full text-[11px] font-semibold flex items-center justify-center text-white"
              style={{ backgroundColor: BRAND_COLOR }}
              aria-label={`${totalItems} items in cart`}
            >
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle className="text-[#1A1A1A]">Cart</SheetTitle>
          <p className="text-sm text-[#6E6A63]">{formatCartLabel(totalItems)}</p>
        </SheetHeader>

        <div className="px-4 pb-4 overflow-auto">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-200 p-6 text-center">
              <p className="text-[#1A1A1A] font-medium">Your cart is empty</p>
              <p className="text-sm text-[#6E6A63] mt-1">
                Add items from the Products page, then checkout on WhatsApp.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={`${item.productId}:${item.size}`}
                  className="rounded-2xl border border-gray-100 p-3 shadow-sm"
                >
                  <div className="flex gap-3">
                    <div className="w-14 h-14 rounded-xl bg-[#F6F2EA] overflow-hidden flex items-center justify-center shrink-0">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <ShoppingCart className="w-5 h-5 text-[#6E6A63]" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-[#1A1A1A] truncate">{item.name}</p>
                      <p className="text-sm text-[#6E6A63]">Size: {formatProductQuantity(item.size)}</p>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center rounded-xl border border-gray-200 overflow-hidden">
                          <button
                            type="button"
                            className="w-10 h-9 inline-flex items-center justify-center hover:bg-gray-50"
                            aria-label="Decrease quantity"
                            onClick={() =>
                              setQuantity(item.productId, item.size, item.quantity - 1)
                            }
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 h-9 inline-flex items-center justify-center text-sm font-medium text-[#1A1A1A]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="w-10 h-9 inline-flex items-center justify-center hover:bg-gray-50"
                            aria-label="Increase quantity"
                            onClick={() =>
                              setQuantity(item.productId, item.size, item.quantity + 1)
                            }
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <Button
                          type="button"
                          variant="ghost"
                          className="text-[#6E6A63] hover:text-red-600 hover:bg-red-50"
                          onClick={() => removeItem(item.productId, item.size)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-auto p-4 border-t border-gray-100 space-y-2">
          <Button
            type="button"
            variant="outline"
            className="w-full border-gray-200 text-[#6E6A63] hover:text-[#1A1A1A]"
            onClick={clearCart}
            disabled={items.length === 0}
          >
            Clear Cart
          </Button>

          {checkoutHref ? (
            <a href={checkoutHref} target="_blank" rel="noopener noreferrer">
              <Button
                type="button"
                className="w-full text-white"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Checkout on WhatsApp
              </Button>
            </a>
          ) : (
            <Button type="button" className="w-full" disabled>
              Checkout on WhatsApp
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
