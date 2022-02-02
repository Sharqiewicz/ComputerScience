"use strict";
exports.__esModule = true;
exports.LinkedList = exports.LinkedNode = void 0;
var LinkedNode = /** @class */ (function () {
    function LinkedNode(value, next) {
        this.value = value;
        this.next = next;
    }
    return LinkedNode;
}());
exports.LinkedNode = LinkedNode;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.iterator = null;
    }
    LinkedList.prototype.add = function (value) {
        var newNode = new LinkedNode(value, null);
        if (this.length && this.tail) {
            var lastNode = this.tail;
            lastNode.next = newNode;
            this.tail = newNode;
        }
        else {
            this.head = newNode;
            this.tail = newNode;
        }
        ++this.length;
    };
    LinkedList.prototype.print = function () {
        this.iterator = this.head;
        for (var i = 0; i < this.length; i++) {
            console.log(this.iterator);
            this.iterator = this.iterator.next;
        }
        this.iterator = this.head;
    };
    LinkedList.prototype.search = function (value) {
        var picker = this.head;
        while (picker && (picker === null || picker === void 0 ? void 0 : picker.next) !== null) {
            if (picker && (picker === null || picker === void 0 ? void 0 : picker.value.value) == value) {
                return picker;
            }
            picker = picker.next;
        }
        return false;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
