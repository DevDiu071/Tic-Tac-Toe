(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/_components/GameBoard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GameBoard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/_context/GameContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function GameBoard() {
    _s();
    const { board, handleClick } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-3 max-w-[328px] mx-auto gap-[20px]",
        children: board.map((square, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handleClick(index),
                className: "bg-semi-dark-navy rounded-[10px] p-4 w-[96px] h-[96px] ",
                children: [
                    square,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Image, {
                        src: xImg,
                        alt: "icon x",
                        className: "w-[32px] h-[32px]"
                    }, void 0, false, {
                        fileName: "[project]/app/_components/GameBoard.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/app/_components/GameBoard.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/_components/GameBoard.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_s(GameBoard, "dRk0uQqArHO4W/vfwRof5Ty+45I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$_context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = GameBoard;
var _c;
__turbopack_context__.k.register(_c, "GameBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app__components_GameBoard_tsx_bc187406._.js.map